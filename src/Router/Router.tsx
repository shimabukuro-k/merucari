import { memo, VFC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Page } from "../components/pages/Page";
import { Page404 } from "../components/pages/Page404";
import { HomeRouter } from "./HomeRouter";
import { Default } from "../components/templates/Default";

export const Router: VFC = memo(() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Page />
        </Route>
        <Route
          path="/merucari"
          render={({ match: { url } }) => (
            <Switch>
              {HomeRouter.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <Default>{route.children}</Default>
                </Route>
              ))}
            </Switch>
          )}
        />
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
});
