import { useForm, SubmitHandler } from "react-hook-form";
import { isValid } from "zod";

type Inputs = {
  email: string;
  password: string;
};

export const RootForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: { email: "email" },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch("email"));

  return (
    <div className="mt-5 flex flex-col">
      <h5 className="underline">LOGIN</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>EMAIL</label>
        <input
          id="email"
          {...register("email", { required: "入力が必須の項目です。" })}
        />
        <label>PASSWORD</label>
        <input
          {...register("password", {
            required: { value: true, message: "入力が必須の項目です。" },
            minLength: { value: 8, message: "8文字以上入力してください" },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "アルファベットのみ入力してください。",
            },
          })}
          type="password"
        />
        {errors.password?.types?.required && (
          <span>This Field Is Required</span>
        )}
        {errors.password?.types?.minLength && (
          <span>This Field Is MinLength 8</span>
        )}
        {errors.password?.types?.pattern && (
          <span>This Field Is Pattern Only Alphabet</span>
        )}
        <button
          type="submit"
          disabled={!isDirty || !isValid}
          className="bg-amber-100 p-5 text-red-400"
        >
          SUBMIT
        </button>
        <p>{watch("email")}</p>
        <p>{watch("password")}</p>
      </form>
    </div>
  );
};
