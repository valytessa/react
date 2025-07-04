import Joke from "./Joke";

export default function App() {
    return (
        <main>
            <Joke
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                upvotes={10}
                isPun={true}
                comments={[
                    { author: "", text: "", title: "" },
                    { author: "", text: "", title: "" },
                ]}
            />
            <Joke
                setup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
                isPun={true}
            />
            <Joke
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
                isPun={true}
            />
            <Joke
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy."
                isPun={true}
            />
            <Joke
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm."
                isPun={true}
            />
            <Joke
                setup="What's the best thing about Switzerland?"
                punchline="I don't know, but the flag is a big plus!"
                isPun={false}
            />
        </main>
    );
}
