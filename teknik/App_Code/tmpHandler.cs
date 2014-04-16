using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for tmpHandler
/// </summary>
public class tmpHandler : IHttpHandler
{
	public tmpHandler()
	{
		
	}
	public void ProcessRequest(HttpContext context)
	{
		HttpRequest request = context.Request;
		HttpResponse response = context.Response;

		string url = request.RawUrl;
		string readToEnd = new StreamReader("C:\\GitHub\\apps_teknik\\teknik\\teknik\\ara\\json\\policeAramaSonuc.json").ReadToEnd();
		response.Write(readToEnd);

		//if (request.Path.ToLower().StartsWith("/kriterlerial"))
		//{
		//	AnalizKriterYukleSonuc analizSayfaYukleSonuc = kriterleriAl(url);
		//	string tmp = Newtonsoft.Json.JsonConvert.SerializeObject(analizSayfaYukleSonuc);
		//	response.Write(tmp);
		//}
		//else if (request.Path.ToLower().StartsWith("/raporual"))
		//{
		//	var originalStream = new StreamReader(request.InputStream);
		//	var jsonKriterler = originalStream.ReadToEnd();
		//	raporuAl(url, jsonKriterler, response);
		//}

	}

	public bool IsReusable { get; private set; }
}