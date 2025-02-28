import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/store";
import { clearOrder, clearCart } from "../../../packages/core/reducers";
import { useNavigate } from "react-router-dom";

export const useOrder = () => {
  const order = useSelector((state: RootState) => state.order.orderData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearOrder = () => {
    dispatch(clearOrder());
    dispatch(clearCart());
    navigate("/");
  };

  const formattedEta = order ? new Date(order.eta).toLocaleString() : "Ej tillgängligt";

  return {
    order,
    navigate,
    formattedEta,
    handleClearOrder,
  };
};
