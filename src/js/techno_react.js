function Techno({ road, desc, styleCss }) {
  return <img src={road} alt={desc} className={styleCss} />;
}

function Technos() {
  return (
    <div className="grid gap-3 grid-cols-6 grid-rows-3 place-items-center w-full p-5 inner-techno">
      <Techno
        road={"src/assets/logo/html.png"}
        desc={"Logo HTML"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/css.png"}
        desc={"Logo CSS"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/js.png"}
        desc={"Logo JS"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/tailwind.png"}
        desc={"Logo Tailwind framework CSS"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/react.png"}
        desc={"Logo React JS"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/sql.png"}
        desc={"Logo SQL"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/mysql.png"}
        desc={"Logo MySQL"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/oracle.png"}
        desc={"Logo ORACLE"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/sqlServer.png"}
        desc={"Logo SQL Server"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/php.png"}
        desc={"Logo PHP"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/symfony.png"}
        desc={"Logo Symfony framework PHP"}
        styleCss={"img_techno size_spe"}
      />
      <Techno
        road={"src/assets/logo/csharp.png"}
        desc={"Logo C#"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/asp_net.png"}
        desc={"Logo ASP.Net Framwork C#"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/python.png"}
        desc={"Logo Python"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/pandas.png"}
        desc={"Logo Pandas framework Python"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/dart.png"}
        desc={"Logo Dart"}
        styleCss={"img_techno"}
      />
      <Techno
        road={"src/assets/logo/flutter.png"}
        desc={"Logo Flutter"}
        styleCss={"img_techno"}
      />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("sec_techno")).render(<Technos />);
