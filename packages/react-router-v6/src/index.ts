import React from "react";
import { IRouterProvider } from "@pankod/refine-core";
import {
    useLocation,
    useParams,
    Link,
    RouteProps,
    BrowserRouterProps,
    useNavigate,
} from "react-router-dom";

import { RouterComponent } from "./routerComponent";
import { Prompt } from "./prompt";

export type RefineRouteProps = RouteProps & {
    layout?: boolean;
};
interface IReactRouterProvider extends IRouterProvider {
    useLocation: typeof useLocation;
    Link: typeof Link;
    useParams: any;
    RouterComponent: React.FC<BrowserRouterProps>;
    routes?: RefineRouteProps[];
}

const RouterProvider: IReactRouterProvider = {
    useHistory: () => {
        const navigate = useNavigate();

        return {
            push: navigate,
            replace: (path: string) => {
                navigate(path, { replace: true });
            },
            goBack: () => {
                navigate(-1);
            },
        };
    },
    useLocation,
    useParams,
    Prompt: Prompt as any,
    Link,
    RouterComponent,
};
export default RouterProvider;
