export const validateStageCreateForm = (values) => {
  const { stageName, stageImageUrl, description, capacity, category } = values;

  // Check if stage name is provided
  if (!stageName.trim()) {
      return 'Stage Name is required!';
  }

  // Check if stage image URL is a valid URL
  try {
      new URL(stageImageUrl);
  } catch (_) {
      return 'Invalid Stage Image URL!';
  }

  // Check if description is provided
  if (!description.trim()) {
      return 'Description is required!';
  }

  // Check if capacity is a positive integer
  if (!Number.isInteger(Number(capacity)) || Number(capacity) <= 0) {
      return 'Capacity must be a positive number!';
  }

  // Check if category is provided
  if (!category.trim()) {
      return 'Category is required!';
  }

  return '';
};
