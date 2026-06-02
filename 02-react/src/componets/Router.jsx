import { useRouter } from "../hooks/useRouter.jsx";

export function Route ({ path, componet: Component }) {
    const { currentPath } = useRouter()

    if (currentPath!== path) {
        return null;
    }

    return <Component />;
}
