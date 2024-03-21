import Link from "next/link";

export default function MealsPage() {
    return (
        <main>
            <h1>MealsPage</h1>
            <Link href="/">Home</Link>
            <Link href="/meals/enchilada">enchilada</Link>
        </main>
    );
}
