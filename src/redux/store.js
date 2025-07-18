// tạo 1 kho chứa store
import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension"; //cấu hình devtools để debug, xem dữ liệu store

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);
/** createStore nhận vào 3 tham số:
 * rootReducer: là 1 function dùng để cập nhập lại các cái giá trị state ở trong cái kho chung này dựa trên action hiện tại
 * initValue: có nghĩa là khi tạo ra cái kho này mà muốn xét một số các giá trị mặc định nào đó thì truyền vào tham số thứ 2
 * enhancers: dùng để cấu hình được các meddleware
 *
 */
export default store;
