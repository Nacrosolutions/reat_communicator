npm install react-hook-form

---

# 📘 **useForm Hook – Mini Documentation**

## 📌 Introduction

`useForm` is a hook provided by **React Hook Form** that helps you build forms with:

* ⚡ High performance
* ✔️ Minimal re-renders
* 🎯 Built-in validation
* 🧼 Clean and simple API

Install the library:

```bash
npm install react-hook-form
```

---

# 🔹 **Basic Usage**

```tsx
import { useForm } from "react-hook-form";

function MyForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

# 🔹 **Key Functions in useForm()**

### 1️⃣ **register()**

Connects an input field to the form state.

```tsx
<input {...register("email")} />
```

### 2️⃣ **handleSubmit()**

Handles form submission + validation.

```tsx
<form onSubmit={handleSubmit(onSubmit)}>
```

### 3️⃣ **formState**

Gives useful information like:

* `formState.errors` – validation errors
* `formState.isSubmitting` – loading state
* `formState.isValid` – form validity

Example:

```tsx
const { formState: { errors } } = useForm();
```

---

# 🔹 **Validation Rules**

React Hook Form supports built-in validation rules:

```tsx
<input 
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email format"
    }
  })}
/>

{errors.email && <p>{errors.email.message}</p>}
```

Common rules:

* `required`
* `minLength`
* `maxLength`
* `min`
* `max`
* `pattern`
* `validate` (custom function)

---

# 🔹 **Default Values**

```tsx
const { register, handleSubmit } = useForm({
  defaultValues: {
    email: "",
    password: ""
  }
});
```

---

# 🔹 **TypeScript Support**

You can define a type for your form:

```tsx
type FormValues = {
  email: string;
  password: string;
};

const { register } = useForm<FormValues>();
```

---

# 🔹 **Reset Form**

```tsx
const { reset } = useForm();

reset(); // Clear form
```

Reset with values:

```tsx
reset({ email: "test@example.com" });
```

---

# 🔹 **Watch Form Values**

```tsx
const { watch } = useForm();
const emailValue = watch("email");
```

---

# 📌 Summary Table

| Feature            | Description                    |
| ------------------ | ------------------------------ |
| `register()`       | Connects input to form state   |
| `handleSubmit()`   | Handles submit + validation    |
| `formState.errors` | Stores validation errors       |
| `watch()`          | Observes field values          |
| `reset()`          | Clears or sets new form values |
| `defaultValues`    | Pre-fill the form              |
| TS support         | Strong TypeScript types        |

---

# ⭐ Final Notes

`useForm` is the **best choice** for TypeScript + React projects:

* High performance
* Easy validation
* Perfect for large forms
* Great community support

---

