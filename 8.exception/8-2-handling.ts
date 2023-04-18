class TimeoutError extends Error {}
class OffelineError extends Error {}

class NetworkClient {
  tryConnect(): void {
    throw new OffelineError('no network!');
  }
}

// 내가 여기서 예외처리를 하는게 의미있을까를 생각해보자
// 여기 예제에서는 App의 run()메서드에서 해주는게 더 낫다
class UserService {
  constructor(private client: NetworkClient) {}
  login() {
    this.client.tryConnect();
  }
}

class App {
  constructor(private userService: UserService) {}
  run() {
    try {
      this.userService.login();
    } catch (error) {
      // error는 무조건 any 타입이다. 그래서 아래와 같은 문장을 잡을수 없다.
      if (error instanceof OffelineError) {
      }
      console.log(error);

      // show dialog를 보여줄수 있음.
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
