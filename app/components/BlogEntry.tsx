type Props = {
  title: string;
  imgPath: string;
};
export function BlogEntry({ title, imgPath }: Props) {
  return (
    <div className="wrapper">
      <div className="title text-3xl text-blue-400 font-semibold tracking-wider">
        {title}
      </div>
      {imgPath && (
        <div className="imgPath mt-2">
          <img alt="#" src={imgPath} />
        </div>
      )}
    </div>
  );
}
