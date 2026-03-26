
import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const parseMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-4 text-legal-grey">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine === '') {
        if (inList) flushList();
        return;
      }

      if (trimmedLine.startsWith('# ')) {
        if (inList) flushList();
        elements.push(
          <h1 key={index} className="text-3xl md:text-4xl font-bold text-legal-black mb-6 font-space-grotesk">
            {trimmedLine.replace('# ', '')}
          </h1>
        );
      } else if (trimmedLine.startsWith('## ')) {
        if (inList) flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-legal-black mt-8 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        if (inList) flushList();
        elements.push(
          <h3 key={index} className="text-xl font-bold text-legal-black mt-6 mb-3">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ')) {
        if (!inList) inList = true;
        listItems.push(trimmedLine.replace('- ', ''));
      } else if (trimmedLine.startsWith('---')) {
        if (inList) flushList();
        elements.push(<hr key={index} className="my-8 border-legal-grey" />);
      } else if (trimmedLine.startsWith('*') && trimmedLine.endsWith('*') && trimmedLine.length > 2) {
        if (inList) flushList();
        elements.push(
          <p key={index} className="text-legal-grey italic text-sm leading-relaxed mb-4">
            {trimmedLine.replace(/^\*|\*$/g, '')}
          </p>
        );
      } else if (trimmedLine.length > 0) {
        if (inList) flushList();
        // Handle bold text
        const processedLine = trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        elements.push(
          <p 
            key={index} 
            className="text-legal-grey leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        );
      }
    });

    if (inList) flushList();

    return elements;
  };

  return <div className="prose prose-lg max-w-none">{parseMarkdown(content)}</div>;
};
