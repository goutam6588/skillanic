import { useFormValue } from "sanity";

const isCategory = (value) =>
  typeof value === "string" && value.trim().length > 0;

export function GalleryCategoryInput(props) {
  const categories = useFormValue(["categories"]);
  const categoryValues = Array.isArray(categories)
    ? [...new Set(categories.filter(isCategory))]
    : [];

  const currentValue = isCategory(props.value) ? props.value : null;
  const currentValueIsMissing =
    currentValue && !categoryValues.includes(currentValue);
  const options = currentValueIsMissing
    ? [
        ...categoryValues.map((category) => ({
          title: category,
          value: category,
        })),
        {
          title: `${currentValue} (not in Filter categories)`,
          value: currentValue,
        },
      ]
    : categoryValues.map((category) => ({
        title: category,
        value: category,
      }));

  return props.renderDefault({
    ...props,
    readOnly: props.readOnly || options.length === 0,
    schemaType: {
      ...props.schemaType,
      options: {
        ...props.schemaType.options,
        layout: "dropdown",
        list: options,
      },
    },
  });
}
