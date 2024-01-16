import NoticeList from "../../components/notice/NoticeList";
import Pagination from "../../components/pagination/pagination";
import { NoticeWrap } from "./NoticeStyle";


const Notice = () => {
    return (
        <NoticeWrap>
            <div className="inner">
                <h2>Notice board</h2>
                <NoticeList />
                <Pagination />
            </div>
        </NoticeWrap>
    );
};

export default Notice;