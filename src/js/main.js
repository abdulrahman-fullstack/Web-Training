
var DefaultSetup = {
	init: function(){
		this.activeTab = $('.elem-active');
		this.selectedTabName = this.activeTab.data('tabname');
		this.selectedTabContent = "";
		this.defaultTemplate = '<div class="container-fluid"><div class="row"><div class="col-md-12 bg-dark text-center"><h2 class="padd-default">Not yet created</h2></div></div></div>';
	},
	setData: function(){
		this.init();
		$('.content-heading').html(this.activeTab.text());
		this.wrapContent();
	},
	wrapContent: function(){
		this.selectedTabContent = $('.'+this.selectedTabName).html() || "";
		this.selectedTabContent === "" ? 
			$('.main-content').html(this.defaultTemplate) :
			$('.main-content').html(this.selectedTabContent);
	}
}

$('.sidebar .elem').on('click' , function(){

	if(!($(this).hasClass('elem-active'))){

		$(this).siblings('.elem-active').removeClass('elem-active');
		$(this).addClass('elem-active');
		DefaultSetup.setData();
	}
});

DefaultSetup.setData();