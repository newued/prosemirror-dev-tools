import { atom } from "jotai";
import type { EditorView } from "@tiptap/pm/view";

export const editorViewAtom = atom<EditorView | null>(null);
