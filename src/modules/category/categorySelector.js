const selectCategory = (state) => state.category;
const selectStatus = (state) => state.category.categoryStatus;

export const categorySelectors = {
  selectStatus,
  selectCategory,
};
