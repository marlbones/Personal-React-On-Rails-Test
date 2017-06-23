#React on Rails

Followed this tutorial:
-https://github.com/shakacode/react_on_rails/blob/master/docs/tutorial.md

Very basic, it even has details on how to deplay to heroku, that'll be good in the future when we get this application fully developed.

Foreman is new, here are the deets here. TLDR: basically all the process required to run an application are ran through `foreman` and outputted to stdout. I guess similar to nodemon.
- http://blog.daviddollar.org/2011/05/06/introducing-foreman.html

The hello_world application is successfully up and running. It was pretty straight-forward. The good thing about this version of react on rails is that is uses webpack and doesn't depend on jQuery. Also, we'll be able to use Redux, React Router, and webpack optimisation.

Questions to ask:
- Can I create a `/user/:id/<react_component>` route with the react_component representing reports?


##ISSUES

###Loading /hello_world

For the first time after signing in and the react component for this page doesn't load. The page loads upone refreshing and loads when we go into the page again through the link after refreshing. Not sure why it doesn't load. However, it does load when entering the URL straight into the browser.

Not work:
- Uncommenting this `<%= javascript_pack_tag 'main' %>` in `application.html.erb`.
