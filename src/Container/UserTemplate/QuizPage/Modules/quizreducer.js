const sateDefault = { danhSachBoDe: [] };
const lopHocReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "TD": {
      let danhSachLopHocUpdate = [...state.danhSachBoDe];
      danhSachLopHocUpdate.push(action.de);
      state.danhSachBoDe = danhSachLopHocUpdate;
      return { ...state };
    }
    default: {
    }
  }
};
export default lopHocReducer;
