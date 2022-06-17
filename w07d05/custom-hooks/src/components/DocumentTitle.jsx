import useDocumentTitle from "../hooks/useDocumentTitle";

const DocumentTitle = () => {
  const title = 'About us!!';

  // useEffect(() => {
  //   document.title = title;
  // }, [title]);

  useDocumentTitle('can be any string');

  return (
    <div>
      <h2>Document Title Component</h2>
    </div>
  );
};

export default DocumentTitle;
