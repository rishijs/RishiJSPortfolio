export default async function Github() {
    let readmeContent = "Loading...";

    try {
        readmeContent = await fetchReadme();
    } catch (error) {
        console.error(error);
        readmeContent = "Failed to load README.";
    }

    return (
        <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
        {parseReadme(readmeContent)}
        </div>
    );
}
  
async function fetchReadme() {
    const username = "rishijs";
    const repo = username;

    const response = await fetch(
        `https://api.github.com/repos/${username}/${repo}/readme?timestamp=${Date.now()}`, 
        {
            headers: {
                Accept: "application/vnd.github.v3.raw",
            },
        }
    );

    if (!response.ok) throw new Error("Failed to fetch README");
    return await response.text();
}
  
function parseReadme(content: string) {
    const imgRegex = /<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;

    content.replace(imgRegex, (match, src, index) => {
        let absoluteSrc = src;

        if (!src.startsWith("http")) {
            absoluteSrc = `https://raw.githubusercontent.com/rishijs/rishijs/main/${src}`;
        }

        parts.push(content.substring(lastIndex, index));
        parts.push(
        <img
            key={index}
            src={absoluteSrc}
            alt="Readme Image"
            className="max-w-full my-2"
        />
        );
        lastIndex = index + match.length;
        return match;
    });

    parts.push(content.substring(lastIndex));

    return <pre className="whitespace-pre-wrap">{parts}</pre>;
}