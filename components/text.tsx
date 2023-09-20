import styles from '../styles/post.module.css';

type TextType = {
  annotations: {
    bold: boolean,
    code: boolean,
    color: string,
    italic: boolean,
    strikethrough: boolean,
    underline: boolean
  },
  text: {
    content: string,
    link: {
      url?: string
    }
  }
}

export default function Text({ title }: { title: TextType[] }) {
  if (!title) {
    return null;
  }
  return title.map((value) => {
    const {
      annotations: {
        bold, code, color, italic, strikethrough, underline,
      },
      text,
    } = value;
    return (
      <span
        className={`text-xl font-bold ${[
          bold ? styles.bold : '',
          code ? styles.code : '',
          italic ? styles.italic : '',
          strikethrough ? styles.strikethrough : '',
          underline ? styles.underline : '',
        ].join(' ')
          }`}
        style={color !== 'default' ? { color } : {}}
        key={text?.content}
      >
        {text?.link ? <a href={text.link.url}>{text.content}</a> : text?.content}
      </span>
    );
  });
}
