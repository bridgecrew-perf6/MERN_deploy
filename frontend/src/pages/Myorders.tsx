import { Button, Card } from "@mui/material";
import axios from "axios";
import moment from "moment";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { FixedSizeList } from "react-window";
import { setOrders } from "../redux/ActionCreators/OrdersActionCreators";
import { IRootState } from "../redux/Reducers/rootReducer";
import { Order } from "../type";

const Myorders = () => {
  const { user } = useSelector((state: IRootState) => ({ user: state.auth }));
  const [myOrders, setMyOrders] = useState<Order[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const ref = useRef<number>(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  useEffect(() => {
    const abortCont = new AbortController();
    const getMyOrders = async () => {
      setLoading(true);
      await axios
        .get("/api/orders/myorders", {
          withCredentials: true,
          signal: abortCont.signal,
        })
        .then((res) => {
          setMyOrders(res.data.myorders);
          setLoading(false);
          dispatch(setOrders(res.data.myorders));
        })
        .catch((err) => (err ? setError(true) : null));
    };
    if (user.user.id) {
      getMyOrders();
    }

    return () => abortCont.abort();
  }, [user?.user.id]);

  const reverseArr = [...myOrders].reverse()

  const Row = useCallback(
    ({ index, style }: { index: number; style: CSSProperties }) => {
      return (
        <div style={style}>
        <Card
          sx={{
            display: "grid",
            gridAutoRows: "1fr,1fr,1fr",
            width: "80vh",
            padding: "5px 5px 5px 5px",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <h3>{moment(reverseArr[index].createdAt).format("LLL")}</h3>

          <h3>
            {reverseArr[index].order.length} brand{" "}
            {
              (ref.current = reverseArr[index].order
                .map((c, index) => +reverseArr[index].amount[index] * +c.cost)
                .reduce((prev, curr) => prev + curr, 0))
            }
            ₺
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={() =>
                navigate(`/profile/myorders/${reverseArr[index]._id}`)
              }
            >
              Details
            </Button>
          </div>
        </Card>
        </div>
      );
    },
    [reverseArr]
  );

  return (
    <div>
      {myOrders.length !== 0 ? (
        <FixedSizeList
        height={550}
        width={800}
        itemSize={205}
        itemCount={myOrders.length}
      >
        {Row}
      </FixedSizeList>
      ) : error ? (
        <h3>need authorization</h3>
      ) : loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <ClimbingBoxLoader size={30} color="#c67c03" />
        </div>
      ) : (
        <h3>no order</h3>
      )}
    </div>
  );
};

export default Myorders;
