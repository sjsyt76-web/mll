import { X, Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { useCart } from "../context/CartContext";

const GOLD = "#C8A97E";
const GOLD_BORDER = "rgba(200,169,126,0.18)";

export function CartDrawer() {
  const { items, open, setOpen, remove, updateQty, total, count } = useCart();
  const [step, setStep] = useState<"cart" | "checkout" | "done">("cart");

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setStep("cart"), 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[460px] flex flex-col"
            style={{ background: "#0A0A0A" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-7 py-5"
              style={{ borderBottom: `1px solid ${GOLD_BORDER}` }}
            >
              <div className="flex items-center gap-3">
                {step !== "cart" && (
                  <button
                    onClick={() => setStep("cart")}
                    className="text-white/40 hover:text-white transition-colors mr-1"
                  >
                    <ArrowLeft size={16} strokeWidth={1.5} />
                  </button>
                )}
                <h2
                  className="font-serif text-white uppercase tracking-[0.25em]"
                  style={{ fontSize: "16px" }}
                >
                  {step === "cart" ? "Корзина" : step === "checkout" ? "Оформление" : "Готово"}
                </h2>
                {step === "cart" && count > 0 && (
                  <span
                    className="font-sans"
                    style={{
                      fontSize: "11px",
                      color: GOLD,
                      border: `1px solid ${GOLD_BORDER}`,
                      padding: "2px 8px",
                    }}
                  >
                    {count}
                  </span>
                )}
              </div>
              <button
                onClick={handleClose}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {step === "cart" && (
              <CartStep
                items={items}
                remove={remove}
                updateQty={updateQty}
                total={total}
                onCheckout={() => setStep("checkout")}
                onClose={handleClose}
              />
            )}

            {step === "checkout" && (
              <CheckoutStep
                total={total}
                onDone={() => setStep("done")}
              />
            )}

            {step === "done" && <DoneStep onClose={handleClose} />}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

/* ── Cart Step ── */
function CartStep({
  items,
  remove,
  updateQty,
  total,
  onCheckout,
  onClose,
}: {
  items: { product: { id: number; name: string; type: string; price: number; img: string }; qty: number; volume: string }[];
  remove: (id: number, vol: string) => void;
  updateQty: (id: number, vol: string, q: number) => void;
  total: number;
  onCheckout: () => void;
  onClose: () => void;
}) {
  return (
    <>
      <div className="flex-1 overflow-y-auto cart-scroll">
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="px-7 py-6 space-y-0">
            {items.map((item, idx) => (
              <div key={`${item.product.id}-${item.volume}`}>
                <CartItemRow
                  item={item}
                  onRemove={() => remove(item.product.id, item.volume)}
                  onQty={(q) => updateQty(item.product.id, item.volume, q)}
                />
                {idx < items.length - 1 && (
                  <div
                    className="my-5"
                    style={{
                      height: 1,
                      background: `linear-gradient(90deg, transparent, ${GOLD_BORDER}, transparent)`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div
          className="px-7 py-6"
          style={{
            borderTop: `1px solid ${GOLD_BORDER}`,
            background: "linear-gradient(180deg, rgba(200,169,126,0.03), rgba(0,0,0,0))",
          }}
        >
          <div className="space-y-3 mb-6">
            <SummaryRow label="Подытог" value={`${total.toLocaleString()} ₸`} />
            <SummaryRow label="Доставка" value="Бесплатно" valueColor={GOLD} />
            <div className="my-3" style={{ height: 1, background: GOLD_BORDER }} />
            <div className="flex justify-between items-baseline">
              <span className="font-serif text-white uppercase tracking-[0.15em]" style={{ fontSize: "13px" }}>
                Итого
              </span>
              <span className="font-serif text-white" style={{ fontSize: "22px", fontWeight: 400 }}>
                {total.toLocaleString()} ₸
              </span>
            </div>
          </div>

          <button
            onClick={onCheckout}
            className="w-full font-sans uppercase tracking-[0.25em] transition-all duration-400 hover:brightness-110"
            style={{
              fontSize: "11px",
              padding: "16px 0",
              background: GOLD,
              color: "#0A0A0A",
              border: "none",
              fontWeight: 600,
            }}
          >
            Оформить заказ
          </button>
          <button
            onClick={onClose}
            className="w-full mt-3 font-sans uppercase tracking-[0.2em] transition-colors duration-300"
            style={{
              fontSize: "10px",
              padding: "12px 0",
              background: "transparent",
              color: "rgba(255,255,255,0.45)",
              border: `1px solid ${GOLD_BORDER}`,
            }}
          >
            Продолжить покупки
          </button>
          <p className="text-center mt-5 font-serif italic" style={{ fontSize: "11px", color: "rgba(200,169,126,0.4)" }}>
            Селективная парфюмерия · Ограниченная коллекция
          </p>
        </div>
      )}
    </>
  );
}

/* ── Checkout Step ── */
function CheckoutStep({ total, onDone }: { total: number; onDone: () => void }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const update = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: false }));
  };

  const handleSubmit = () => {
    const required = ["name", "phone", "city", "address"];
    const newErrors: Record<string, boolean> = {};
    for (const f of required) {
      if (!form[f as keyof typeof form].trim()) newErrors[f] = true;
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onDone();
  };

  return (
    <div className="flex-1 overflow-y-auto cart-scroll px-7 py-6">
      <p
        className="font-sans text-white/40 mb-6 leading-relaxed"
        style={{ fontSize: "12px" }}
      >
        Заполните данные для оформления заказа. Мы свяжемся с вами для подтверждения.
      </p>

      <div className="space-y-4">
        <FormField
          label="ФИО"
          placeholder="Иван Иванов"
          value={form.name}
          onChange={(v) => update("name", v)}
          error={errors.name}
          required
        />
        <FormField
          label="Телефон"
          placeholder="+7 (700) 000-00-00"
          value={form.phone}
          onChange={(v) => update("phone", v)}
          error={errors.phone}
          type="tel"
          required
        />
        <FormField
          label="Email"
          placeholder="your@email.com"
          value={form.email}
          onChange={(v) => update("email", v)}
          error={errors.email}
          type="email"
        />
        <FormField
          label="Город"
          placeholder="Алматы"
          value={form.city}
          onChange={(v) => update("city", v)}
          error={errors.city}
          required
        />
        <FormField
          label="Адрес доставки"
          placeholder="ул. Абая 38, кв. 12"
          value={form.address}
          onChange={(v) => update("address", v)}
          error={errors.address}
          required
        />
      </div>

      {/* Order total */}
      <div
        className="flex justify-between items-baseline mt-8 pt-5"
        style={{ borderTop: `1px solid ${GOLD_BORDER}` }}
      >
        <span className="font-serif text-white uppercase tracking-[0.15em]" style={{ fontSize: "13px" }}>
          К оплате
        </span>
        <span className="font-serif text-white" style={{ fontSize: "22px", fontWeight: 400 }}>
          {total.toLocaleString()} ₸
        </span>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full mt-6 font-sans uppercase tracking-[0.25em] transition-all duration-400 hover:brightness-110"
        style={{
          fontSize: "11px",
          padding: "16px 0",
          background: GOLD,
          color: "#0A0A0A",
          border: "none",
          fontWeight: 600,
        }}
      >
        Подтвердить заказ
      </button>
    </div>
  );
}

/* ── Form Field ── */
function FormField({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  required,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: boolean;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        className="font-sans uppercase tracking-[0.2em] block mb-2"
        style={{ fontSize: "9px", color: error ? "#e55" : "rgba(255,255,255,0.4)" }}
      >
        {label}
        {required && <span style={{ color: GOLD, marginLeft: 3 }}>*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full font-sans text-white placeholder:text-white/20 outline-none transition-colors focus:border-[#C8A97E]/50"
        style={{
          fontSize: "13px",
          padding: "12px 14px",
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${error ? "rgba(229,85,85,0.5)" : GOLD_BORDER}`,
        }}
      />
    </div>
  );
}

/* ── Done Step ── */
function DoneStep({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
      <div
        className="mb-6 flex items-center justify-center"
        style={{
          width: 72,
          height: 72,
          border: `1px solid ${GOLD_BORDER}`,
          background: "rgba(200,169,126,0.05)",
        }}
      >
        <Check size={28} strokeWidth={1} style={{ color: GOLD }} />
      </div>
      <h3 className="font-serif text-white mb-2" style={{ fontSize: "20px", fontWeight: 400 }}>
        Заказ оформлен
      </h3>
      <p
        className="font-sans text-white/35 leading-relaxed mb-8"
        style={{ fontSize: "12px", maxWidth: 260 }}
      >
        Мы свяжемся с вами для подтверждения заказа. Спасибо за выбор Dee&nbsp;&&nbsp;Abllo.
      </p>
      <button
        onClick={onClose}
        className="font-sans uppercase tracking-[0.25em] transition-all duration-400 hover:brightness-110"
        style={{
          fontSize: "11px",
          padding: "14px 40px",
          background: GOLD,
          color: "#0A0A0A",
          border: "none",
          fontWeight: 600,
        }}
      >
        Закрыть
      </button>
    </div>
  );
}

/* ── Cart Item Row ── */
function CartItemRow({
  item,
  onRemove,
  onQty,
}: {
  item: { product: { id: number; name: string; type: string; price: number; img: string }; qty: number; volume: string };
  onRemove: () => void;
  onQty: (q: number) => void;
}) {
  return (
    <div className="flex gap-5">
      <div
        className="shrink-0 overflow-hidden relative"
        style={{ width: 100, height: 130, border: `1px solid ${GOLD_BORDER}` }}
      >
        <ImageWithFallback
          src={item.product.img}
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(200,169,126,0.08), transparent 60%)" }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-between py-0.5">
        <div>
          <div className="font-sans uppercase tracking-[0.3em] mb-1" style={{ fontSize: "9px", color: GOLD, opacity: 0.6 }}>
            {item.product.type}
          </div>
          <div className="font-serif text-white mb-1" style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.3 }}>
            {item.product.name}
          </div>
          <div className="font-sans text-white/35" style={{ fontSize: "11px" }}>
            {item.volume}
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex items-center" style={{ border: `1px solid ${GOLD_BORDER}` }}>
            <button
              onClick={() => onQty(item.qty - 1)}
              className="flex items-center justify-center transition-colors hover:bg-white/5"
              style={{ width: 32, height: 32, color: "rgba(255,255,255,0.5)" }}
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span
              className="font-sans text-white flex items-center justify-center"
              style={{
                width: 32,
                height: 32,
                fontSize: "12px",
                borderLeft: `1px solid ${GOLD_BORDER}`,
                borderRight: `1px solid ${GOLD_BORDER}`,
              }}
            >
              {item.qty}
            </span>
            <button
              onClick={() => onQty(item.qty + 1)}
              className="flex items-center justify-center transition-colors hover:bg-white/5"
              style={{ width: 32, height: 32, color: "rgba(255,255,255,0.5)" }}
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-sans text-white" style={{ fontSize: "14px" }}>
              {(item.product.price * item.qty).toLocaleString()} ₸
            </span>
            <button onClick={onRemove} className="text-white/25 hover:text-red-400/70 transition-colors">
              <Trash2 size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Summary Row ── */
function SummaryRow({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) {
  return (
    <div className="flex justify-between items-baseline">
      <span className="font-sans text-white/40 uppercase tracking-[0.15em]" style={{ fontSize: "10px" }}>
        {label}
      </span>
      <span className="font-sans" style={{ fontSize: "13px", color: valueColor || "rgba(255,255,255,0.7)" }}>
        {value}
      </span>
    </div>
  );
}

/* ── Empty Cart ── */
function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center">
      <div
        className="mb-6 flex items-center justify-center"
        style={{ width: 72, height: 72, border: `1px solid ${GOLD_BORDER}` }}
      >
        <ShoppingBag size={28} strokeWidth={1} style={{ color: GOLD, opacity: 0.4 }} />
      </div>
      <h3 className="font-serif text-white mb-2" style={{ fontSize: "20px", fontWeight: 400 }}>
        Корзина пуста
      </h3>
      <p className="font-sans text-white/35 leading-relaxed" style={{ fontSize: "12px", maxWidth: 240 }}>
        Откройте каталог и добавьте ароматы, которые вас вдохновляют
      </p>
    </div>
  );
}
