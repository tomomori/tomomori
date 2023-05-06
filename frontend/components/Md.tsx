import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import { useParams } from 'react-router-dom';
import * as CSS from "csstype";

const Md: FC = () => {
    const [markdown, setMarkdown] = useState("");
    const params = useParams();
    console.log(params.f1);
    console.log(params.f2);

    const w: CSS.Properties = {width:"80%", margin:"0 auto"};

    let path = "/documents/";
    if (params.f1 === undefined) {
        path += "menu.md";
    } else {
        if (params.f1.toLowerCase() === "SlackBackupAsHtml".toLowerCase()) {
            path += "/SlackBackupAsHtml/README.md";
        } else if (params.f1.toLowerCase() === "Privacy".toLowerCase()) {
            path += "privacy.md";
        } else if (params.f1.toLowerCase() === "Show_mypage_when_opening_new_tab".toLowerCase()) {
            path += "/Show_mypage_when_opening_new_tab/README.md";
        } else {
            window.location.href = "/";
        }
    }

    useEffect(() => {
        /* pathは大文字小文字を区別するので注意する */
        fetch(path)
        .then((m) => {
            return m.text();
        })
        .then((md) => {
            setMarkdown(md);
        });
    }, []);

    return (
        <div className="" style={w}>
            <ReactMarkdown
                children={markdown}
                components={{code: CodeBlock}}
                linkTarget="_blank"
            />
        </div>
    );
};

export default Md;