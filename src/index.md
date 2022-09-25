---
layout: default
---

<div class="flex flex-col gap-6">
  <div class="font-bold text-3xl text-slate-800">Latest Post</div>

  <ul class="flex flex-col gap-8 lg:gap-6">
    <% collections.posts.resources.each do |post| %>
      <li class="flex flex-col gap-3 lg:gap-4 lg:flex-row">
        <img class="ring-2 ring-slate-600/10 object-cover w-full rounded-xl max-h-[200px] lg:min-w-[250px] lg:max-w-[250px] lg:min-h-[250px]" src="<%= post.data.thumbnail %>" alt="<%= post.data.title %> thumbnail">
        <div class="flex flex-col gap-2 lg:my-4">
          <a href="<%= post.relative_url %>" class="font-bold text-xl lg:text-2xl">
            <%= post.data.title %>
          </a>
          <p class="text-xs lg:text-sm">
            <%= date_to_string post.data.date, 'ordinal', 'US' %>
          </p>
          <p class="hidden lg:block lg:line-clamp-5">
            <%= post.data.description %>
          </p>
          <a href="<%= post.relative_url %>" class="hidden lg:block text-blue-500 font-semibold underline text-md">Read more...</a>
        </div>
      </li>
    <% end %>
  </ul>
</div>
