module.exports = reqFilter = ( req, resp, next ) =>
{
	if ( !req.query.age )
	{
		resp.send( "Please provide Age!!" )
	}
	else if ( req.query.age < 18 )
	{
		resp.send( "Oops!! You can not Access this Page." )
	}
	else
	{
		next();
	}
}