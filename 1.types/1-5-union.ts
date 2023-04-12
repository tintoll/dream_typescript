{
  // Union Types : OR
  // 발생할수 있는 케이스 중에 하나만 사용할때 많이 사용한다.
  // 엄청 많이 사용된다.
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state)
  // success -> 성공 body
  // fail -> 실패 reason

  function printLoginState(state: LoginState) {
    // state안에 response가 있는지를 체크하면  state.response를 사용할 수 있다.
    if ('response' in state) {
      console.log(`성공 ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }
}
