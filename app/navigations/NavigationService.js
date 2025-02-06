import { CommonActions, StackActions } from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    console.log("setTopLevelNavigator->", navigatorRef);

    if (navigatorRef) {
        _navigator = navigatorRef;
    }
}

function navigate(routeName, params) {
    if (_navigator) {
        _navigator.dispatch(
            CommonActions.navigate({
                name: routeName,
                params,
            })
        );
    } else {
        console.log("navigate error->", _navigator);
        console.warn("Navigator is not s et.");
    }
}

function getCurrentRoute() {
    let route = { name: '' };
    try {
        if (_navigator) {
            let state = _navigator.getRootState();
            while (state.routes) {
                state = state.routes[state.index];
                route = state;
            }
        }
    } catch (err) {
        route = { name: '' };
    }
    return route;
}

function getPreviousRoute() {
    let previousRoute = { name: '' };
    try {
        if (_navigator) {
            const state = _navigator.getRootState();
            const history = state.routes;
            if (history && history.length > 1) {
                previousRoute = history[history.length - 2];
            }
        }
    } catch (err) {
        previousRoute = { name: '' };
    }
    return previousRoute;
}

function goBack() {
    if (_navigator) {
        _navigator.dispatch(CommonActions.goBack());
    } else {
        console.warn("Navigator is not set.");
    }
}

function fullReset(routeName, params) {
    if (_navigator) {
        const resetAction = CommonActions.reset({
            index: 0,
            routes: [{ name: routeName, params }],
        });
        _navigator.dispatch(resetAction);
    } else {
        console.warn("Navigator is not set.");
    }
}

function push(routeName, params) {
    if (_navigator) {
        _navigator.dispatch(
            StackActions.push(routeName, params)
        );
    } else {
        console.warn("Navigator is not set.");
    }
}

function replace(routeName, params) {
    if (_navigator) {
        _navigator.dispatch(
            StackActions.replace(routeName, params)
        );
    } else {
        console.warn("Navigator is not set.");
    }
}

export default {
    navigate,
    goBack,
    setTopLevelNavigator,
    getCurrentRoute,
    fullReset,
    getPreviousRoute,
    push,
    replace,
};
