import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { JoinWrap } from "./LoginStyle";
import { signup } from "../../store/modules/authSlice";

const Join = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dataList } = useSelector((state) => state.auth);
  const [form, setForm] = useState({
    username: "",
    tel: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (error) {
      setError("");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmed = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, value.trim()])
    );

    const normalized = {
      ...trimmed,
      email: trimmed.email.toLowerCase(),
      tel: trimmed.tel.replace(/[^0-9-]/g, ""),
    };

    if (Object.values(normalized).some((value) => !value)) {
      setError("모든 입력 항목을 빠짐없이 입력해 주세요.");
      return;
    }

    if (dataList.some((user) => user.email === normalized.email)) {
      setError("이미 가입된 이메일입니다. 다른 이메일을 사용해 주세요.");
      return;
    }

    dispatch(signup(normalized));
    navigate("/login", { replace: true });
  };

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <JoinWrap>
      <div className="inner">
        <h2>회원가입</h2>
        <form onSubmit={onSubmit}>
          <p>
            <label htmlFor="username">이름</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="홍길동"
              value={form.username}
              onChange={onChange}
              required
            />
          </p>
          <p>
            <label htmlFor="tel">전화번호</label>
            <input
              id="tel"
              type="tel"
              name="tel"
              placeholder="010-0000-0000"
              value={form.tel}
              onChange={onChange}
              inputMode="tel"
              pattern="^0\d{1,2}-?\d{3,4}-?\d{4}$"
              required
            />
          </p>
          <p>
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="abc@example.com"
              value={form.email}
              onChange={onChange}
              required
            />
          </p>
          <p>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="영문과 숫자 조합 6자 이상"
              minLength={6}
              value={form.password}
              onChange={onChange}
              required
            />
          </p>
          {error && <div className="error" role="alert">{error}</div>}
          <p>
            <button type="submit">회원가입</button>
            <button type="button" onClick={onCancel} className="ghost">
              취소
            </button>
          </p>
        </form>
        <div className="login-bottom">
          <span>이미 가입하셨나요?</span>
          <Link to="/login">로그인 하러가기</Link>
        </div>
      </div>
    </JoinWrap>
  );
};

export default Join;
