export default function filterProps<FilteredType, OtherType>(
  props: FilteredType & OtherType,
  filterNames: string[]
): [filteredProps: FilteredType, otherProps: OtherType] {
  let filteredProps: any = {};
  let otherProps: any = {};

  for (const [propName, propValue] of Object.entries(props)) {
    if (filterNames.includes(propName))
      filteredProps[propName] = propValue;
    else
      otherProps[propName] = propValue;
  }

  return [filteredProps, otherProps];
}
