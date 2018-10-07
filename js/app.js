function toggle_nav()
{

	var nav=document.getElementById('navleft');
	var maincont=document.getElementById('main-cont')
	var icon=document.getElementById('changer');

	if(nav.className=="navbar-left")
	{
		nav.className="";
		nav.className="navbar-left-block";
		maincont.className="";
		maincont.className="main-cont-block";
		icon.className="";
		icon.className="icon-inner";
	}
	else
	{
		nav.className="";
		nav.className="navbar-left";
		maincont.className="";
		maincont.className="main-cont";
		maincont.setAttribute("status","0");
		icon.className="";
		icon.className="icon";
	}
}