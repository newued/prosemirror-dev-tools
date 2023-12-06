import { useEffect } from 'react';
import { type Editor } from '@tiptap/react';
import applyDevTools from './dev-tools';

function useTiptapDevTool(editor: Editor | null) {
	useEffect(() => {
		// console.log(editor, html, medias);
		Promise.resolve().then(() => {
			if (editor) {
				const worker = new Worker(
					new URL('./json-diff.worker.ts', import.meta.url),
					{
						type: 'module',
					}
				);
				applyDevTools(editor.view, { diffWorker: worker });
			}
		});
	}, [editor]);
}

export default useTiptapDevTool;
