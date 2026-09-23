const Now = () => {
  const { theme } = useTheme();

  return (
    <div className={`home ${theme}`}>
      <h1>Today's weather</h1>
        <WeatherToday />
    </div>
  );
};

export default Now;