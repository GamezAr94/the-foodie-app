import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1 style={{ color: "white", textAlign: "center" }}>
                Time to get started!
            </h1>
            <p>
                <Link href="/meals">meals</Link>
            </p>
            <p>
                <Link href="/meals/share">share</Link>
            </p>
            <p>
                <Link href="/community">Community</Link>
            </p>
            <p>
                <Link href="/meals/enchilada">enchilada</Link>
            </p>
        </main>
    );
}
