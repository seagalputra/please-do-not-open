---
layout: default
---

<div class="flex flex-row">
  <div class="flex flex-col gap-6 flex-1 lg:flex-initial lg:basis-8/12">
    <h1 class="font-bold text-3xl text-slate-800">Latest Post</h1>
    <ul class="flex flex-col gap-4 lg:gap-6">
      <% collections.posts.resources.each do |post| %>
        <li class="hover:scale-105 hover:shadow-2xl transition lg:transition-none lg:hover:shadow-none lg:hover:scale-100">
          <a href="<%= post.relative_url %>" class="relative lg:static lg:flex lg:flex-row">
            <img class="object-cover w-full rounded-xl max-h-[200px] lg:min-w-[250px] lg:max-w-[250px] lg:min-h-[250px]" src="<%= post.data.thumbnail %>" alt="<%= post.data.title %> thumbnail">
            <div class="absolute lg:static left-0 bottom-0 w-full h-full rounded-xl bg-gradient-to-t from-black lg:bg-none">
              <div class="flex flex-col absolute lg:static text-white lg:text-slate-800 left-0 bottom-0 mx-4 mb-4 lg:my-4 gap-1" href="<%= post.relative_url %>">
                <p class="text-xs">
                  <%= date_to_string post.data.date, 'ordinal', 'US' %>
                </p>
                <p class="font-bold text-2xl">
                  <%= post.data.title %>
                </p>
                <p class="hidden lg:block lg:mt-2">
                  <%= post.data.description %>
                </p>
              </div>
            </div>
          </a>
        </li>
      <% end %>
    </ul>
  </div>

  <div class="flex flex-col gap-6 hidden lg:block lg:basis-4/12">
    <h1 class="font-bold text-3xl text-slate-800">Most Popular</h1>
  </div>
</div>
