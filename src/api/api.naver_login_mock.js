import MockAdapter from "axios-mock-adapter";
import api from "./api.auth_service.js";

describe("<LoginModal />", () => {
  const naver_mock = new MockAdapter(api, { delayResponse: 500 });
  naver_mock.onPost("auth/naver").reply((req) => {
    const data = JSON.parse(req.data);
    if (data.member_email === "" || data.member_password === "") {
      const errorRes = {
        message: "서버 에러",
        status: 500,
        data: null,
      };
      return [500, errorRes];
    }
    const res = {
      access_token: "qoewnaldirjwlerierwleirurldks",
      refresh_token: "qoewnaldirjwleriqoeri1ik3134",
      member_number: 245,
      isSocialLogin: false, // TODO : 이거만 다른 case 사용
    };
    return [200, res];
  });
});

export default login_mock;
