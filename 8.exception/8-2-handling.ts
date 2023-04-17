class NetworkClient {
  tryConnect(): void {
    throw new Error('no network!');
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
      console.log(error);

      // show dialog를 보여줄수 있음.
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
