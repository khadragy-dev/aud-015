const urlChanged = ({
  callback,
  guard = "",
}: {
  callback: Function;
  guard: string | false;
}) => {
  let previousUrl = "";

  const observer = new MutationObserver(function (_) {
    if (location.href !== previousUrl) {
      previousUrl = location.href;

      if (guard && location.pathname.startsWith(guard)) callback();
      if (guard === false) callback();
    }
  });

  const config = { subtree: true, childList: true };
  observer.observe(document, config);
};

export default urlChanged;
