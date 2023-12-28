import { FlutterIcon, JavaScriptIcon, KotlinIcon, NextJSIcon, PythonIcon, ReactIcon, TypeScriptIcon } from "@/assets/icon";
import CIcon from "@/assets/icon/c";
import { ProjectItemModel } from "@/models";
import { ReactNode } from "react";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
export default class LandingViewModel {
    public projectItemData: ProjectItemModel[];
    public skills: Record<string, any|ReactNode>[];
    constructor() {
        this.skills = [
            {
                icon: JavaScriptIcon(),
                name: "Javascript",
            },
            {
                icon: TypeScriptIcon(),
                name: "Typescript",
            },
            {
                icon: PythonIcon(),
                name: "Python"
            },
            {
                icon: CIcon(),
                name: "C"
            },
            {
                icon: ReactIcon(),
                name: "React"
            },
            {
                icon: FlutterIcon(),
                name: "flutter"
            },
            {
                icon: KotlinIcon(),
                name: "kotlin"
            },
            {
                icon: NextJSIcon(),
                name: "nextjs"
            }
        ]
        this.projectItemData = [
            {
                title: "",
                imageUrl: "",
                detail: "",
                shortcuts: ""
            }
        ];
    }
}
