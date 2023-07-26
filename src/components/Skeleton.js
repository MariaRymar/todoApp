function Skeleton({ times }) {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div className="outer-skeleton" key={i}>
          <div className="inner-skeleton" />
        </div>
      );
    });

  return boxes;
}

export default Skeleton;
