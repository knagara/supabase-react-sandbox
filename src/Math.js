import { supabase } from "./supabaseClient";
import { useLoaderData } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const markdown = `$$L = \\frac{1}{2} \\rho v^2 S C_L$$`;

export async function loader() {
  let { data: maths, error } = await supabase.from("math").select("*");
  console.log(maths);
  return { maths };
}

export default function MathPage() {
  const { maths } = useLoaderData();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      <h1>Math</h1>
      <ReactMarkdown
        children={markdown}
        // children={`$\\frac{1}{x+1} $`}
        // children={`The lift coefficient ($C_L$) is a dimensionless coefficient.`}
        rehypePlugins={[rehypeKatex]}
        remarkPlugins={[remarkMath]}
      ></ReactMarkdown>
      <h2>Data from supabase</h2>
      <div>
        {maths.length ? (
          <>
            {maths.map((math) => (
              <div key={math.id}>
                <ReactMarkdown
                  children={math.text}
                  rehypePlugins={[rehypeKatex]}
                  remarkPlugins={[remarkMath]}
                ></ReactMarkdown>
              </div>
            ))}
          </>
        ) : (
          <p>
            <i>No data</i>
          </p>
        )}
      </div>
    </div>
  );
}
