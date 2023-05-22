import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DefaultLayout } from "../components/Templates/DefaultLayout";
import { HeaderOnly } from "../components/Templates/HeaderOnly";
import { Top } from "../pages/Top";
import { Users } from "../pages/Users";
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route exact path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
