```ruby
require 'nokogiri'

{
  layout: 'default'
}
```

<div data-navbar-target="categories" class="flex flex-row gap-3 px-4 sm:px-6 lg:px-0 overflow-x-scroll scrollbar-hide max-w-screen-lg mx-auto w-full mt-[96px]">
  <% ['Guide', 'Microsoft Windows', 'Tutorial', 'Linux', 'iPhone'].each do |tag| %>
    <div class="bg-slate-50 w-auto border border-slate-900/10 rounded-full px-4 py-2">
      <p class="text-sm text-slate-700 whitespace-nowrap">
          <%= tag %>
      </p>
    </div>
  <% end %>
</div>

<main class="w-full max-w-screen-lg mx-auto py-8 px-4 sm:px-6 lg:px-0 lg:flex">
  <div class="flex flex-col lg:basis-9/12 gap-6 lg:pr-9">
    <div class="flex items-center">
      <h1 class="font-bold text-3xl text-slate-800 w-full lg:basis-3/12">Latest Posts</h1>
      <div class="hidden lg:block border-b border-slate-300 w-full lg:basis-9/12"></div>
    </div>

    <ul class="flex flex-col gap-8 lg:gap-6">
      <% collections.posts.resources.each do |post| %>
        <li class="flex flex-col gap-3 lg:gap-4 lg:flex-row">
          <img class="ring-2 ring-slate-600/10 object-cover w-full rounded-xl max-h-[200px] lg:min-w-[250px] lg:max-w-[250px] lg:min-h-[250px]" src="<%= post.data.thumbnail %>" alt="<%= post.data.title %> thumbnail">
          <div class="flex flex-col flex-1 gap-2 lg:my-4">
            <a href="<%= post.relative_url %>" class="font-bold text-xl lg:text-2xl bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#43cea2] to-[#185a9d]">
              <%= post.data.title %>
            </a>
            <p class="text-xs lg:text-sm">
              <%= date_to_string post.data.date, 'ordinal', 'US' %>
            </p>
            <p class="hidden lg:block lg:line-clamp-3 text-sm prose mt-2 text-slate-600">
              <%= Nokogiri::HTML(post.content.split("\n").first).text %>
            </p>
            <a href="<%= post.relative_url %>" class="hidden lg:block text-blue-500 font-semibold underline text-md hover:text-blue-700">Read more...</a>
          </div>
        </li>
      <% end %>
    </ul>
  </div>

  <aside class="hidden lg:flex lg:flex-col lg:basis-3/12 lg:mt-2 gap-6">
    <h1 class="font-bold text-xl text-slate-800">Popular Posts</h1>
    <ul class="flex flex-col gap-4">
      <% collections.posts.resources.take(3).each do |post| %>
        <li class="flex flex-row gap-2">
          <img class="object-cover w-full rounded-xl max-h-[64px] lg:min-w-[64px] lg:max-w-[64px] lg:min-h-[64px]" src="<%= post.data.thumbnail %>" alt="<%= post.data.title %> thumbnail">
          <a href="<%= post.relative_url %>" class="font-bold text-sm">
            <%= post.data.title %>
          </a>
        </li>
      <% end %>
    </ul>
  </aside>
</main>
