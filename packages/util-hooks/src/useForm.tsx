import { FieldValues, useForm, UseFormProps } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import joi from "joi";

interface useJoiFormProps<Z extends FieldValues>
  extends Exclude<UseFormProps<Z>, "resolver"> {
  schema: joi.Schema<Z>;
}

export const useSForm = <Z extends FieldValues>({
  schema,
  ...formProps
}: useJoiFormProps<Z>) =>
  useForm({
    mode: "onTouched",
    ...formProps,
    resolver: joiResolver(schema),
  });
