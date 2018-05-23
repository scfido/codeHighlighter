import { PrismCode } from "react-prism";
import "prismjs"
import "prismjs/themes/prism.css";
import loadLanguages from "prismjs/components/index.js"
//添加行号插件
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

//加载C#语法高亮
loadLanguages(["csharp"]);

export default function () {

  return (<>
    <h1>代码高亮</h1>
    <h2>cshtml</h2>
    <pre>
      <PrismCode className="language-csharp line-numbers">
        {`
@model Senparc.Weixin.MP.Entities.GetMenuResult
@{
    ViewBag.Title = "自定义菜单工具";
    Layout = "~/Views/Shared/_Layout.cshtml";
}
@section HeaderContent
{
    <style>
        .txtButton
        {
            width: 150px;
        }

    </style>
}
<table>
<thead>
    <tr>
        <th></th>
        <th>第一列</th>
        <th>第二列</th>
        <th>第三列</th>
    </tr>
</thead>
<tbody>
    @for (int i = 0; i < 6; i++)
    {
        var isRootMenu = i == 5;
        <tr id="@(isRootMenu ? "subMenuRow_" + i : "rootMenuRow")">
            <td>
                @(isRootMenu ? "一级菜单按钮" : ("二级菜单No." + (i + 1)))
            </td>
            @for (int j = 0; j < 3; j++)
            {
                var namePrefix = isRootMenu ? string.Format("menu.button[{0}]", j) : string.Format("menu.button[{0}].sub_button[{1}]", j, i);
                var idPrefix = isRootMenu ? string.Format("menu_button{0}", j) : string.Format("menu_button{0}_sub_button{1}", j, i);
                <td>
                    <input type="hidden" name="@(namePrefix).key" id="@(idPrefix)_key"/>
                    <input type="hidden" name="@(namePrefix).type" id="@(idPrefix)_type" value="click"/>
                    <input type="hidden" name="@(namePrefix).url" id="@(idPrefix)_url" />
                    <input type="text" name="@(namePrefix).name" id="@(idPrefix)_name" class="txtButton" data-i="@i" data-j="@j" @Html.Raw(isRootMenu ? string.Format(@"data-root=""{0}""", j) : "") />
                </td>
            }
        </tr>
    }
</tbody>
</table>
`}
      </PrismCode>
    </pre>
    <h2>CSharp</h2>
    <pre>
      <PrismCode className="language-csharp line-numbers">
        {`
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

using LexiconLMS.Models;
using LexiconLMS.Models.ViewModels;
using System.Net;
using System.Data;
using System.Data.Entity;


namespace LexiconLMS.Controllers
{
    public class UserController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: User
        // Namn för referens i eventuell dokumentation: CM_240_G100
        [Authorize]
        public ActionResult Index(int? id)
        {
            int courseId = (id != null) ? id.Value : 0;

            bool teacherListFlag = (courseId == 0);

            if (!User.IsInRole(Role.Teacher))
            {
                var currentUserId = User.Identity.GetUserId();
                var user = db.Users.Where(u => u.Id == currentUserId).FirstOrDefault();
                courseId = user.CourseId.Value;
            }
            var users =
                db.Users
                .Where(omega => (((omega.CourseId != null) ? omega.CourseId.Value : 0) == courseId))
                .Select(u => new UserViewModel
                {
                    Id = u.Id,
                    CourseId = courseId,
                    UserFName = u.FirstName,
                    UserLName = u.LastName,
                    UserEmail = u.Email,
                    UserName = u.UserName,
                    UserPhoneNumber = u.PhoneNumber
                });
                
            `}
      </PrismCode>
    </pre>

    <h2>html</h2>
    <pre>
      <PrismCode className="language-markup">
        {`
  <div id="pages" class="view-container">
  <div id="page-fav" class="page-container pageInt" style="display: block; transform: translate3d(0px, 0%, 0px);">
  <div class="wrapper"><!--页面主容器-->
    <div class="out"><!--cell box-->
      <img src="data:image/gif;base64,R0lGODlheAA3AIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMDBFRUQ3RTI5M0YxMUUzQTA4OUMxODRGMTc1QUY1OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMDBFRUQ3RDI5M0YxMUUzQTA4OUMxODRGMTc1QUY1OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MkIxRUNFNjI4RjQxMUUzQTEwNERFQUI3QUZEOTBBRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MkIxRUNFNzI4RjQxMUUzQTEwNERFQUI3QUZEOTBBRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAB4ADcAAAJahI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6PVYAADs=" id="cellWrapperDummy"><!--用于保持宽高比撑开格子的容器-->
      <a class="contain" href="http://localhost:3000/">
        <div class="front">
          <img class="thumbnail" src="chrome://thumb/http://localhost:3000/">
          <img src="data:image/gif;base64,R0lGODlhOAHuAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNUI4NzkyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNUI4N0EyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI1Qjg3NzI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI1Qjg3ODI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAA4Ae4AAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aNeRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYSpFgAAOw==" id="cellDummy"><!--此元素用于保持宽高比撑开格子容器-->
          <!--div class="mask"></div-->
          <div class="close" url="http://localhost:3000/"></div>
        </div>
        <!--<div class="close"></div>-->
        <div class="backface">
          <!--div class="mask"></div-->
          <div class="text">
            <span class="title">http://localhost:3000/</span>
            <span class="url"></span>
          </div>
        </div>
      </a>
      <a class="contain" href="http://www.cnbeta.com/">
        <div class="front">
          <img class="thumbnail" src="chrome://thumb/http://www.cnbeta.com/">
          <img src="data:image/gif;base64,R0lGODlhOAHuAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNUI4NzkyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNUI4N0EyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI1Qjg3NzI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI1Qjg3ODI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAA4Ae4AAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aNeRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYSpFgAAOw==" id="cellDummy"><!--此元素用于保持宽高比撑开格子容器-->
          <!--div class="mask"></div-->
          <div class="close" url="http://www.cnbeta.com/"></div>
        </div>
        <!--<div class="close"></div>-->
        <div class="backface">
          <!--div class="mask"></div-->
          <div class="text">
            <span class="title">cnBeta.COM - 中文业界资讯站</span>
            <span class="url"></span>
          </div>
        </div>
      </a>
      <a class="contain" href="https://aspnetboilerplate.com/">
        <div class="front">
          <img class="thumbnail" src="chrome://thumb/https://aspnetboilerplate.com/">
          <img src="data:image/gif;base64,R0lGODlhOAHuAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNUI4NzkyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNUI4N0EyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI1Qjg3NzI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI1Qjg3ODI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAA4Ae4AAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aNeRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYSpFgAAOw==" id="cellDummy"><!--此元素用于保持宽高比撑开格子容器-->
          <!--div class="mask"></div-->
          <div class="close" url="https://aspnetboilerplate.com/"></div>
        </div>
        <!--<div class="close"></div>-->
        <div class="backface">
          <!--div class="mask"></div-->
          <div class="text">
            <span class="title">ASP.NET Boilerplate - Web Application Framework</span>
            <span class="url"></span>
          </div>
        </div>
      </a>
      <a class="contain" href="http://huaweicloud.com/">
        <div class="front">
          <img class="thumbnail" src="chrome://thumb/http://huaweicloud.com/">
          <img src="data:image/gif;base64,R0lGODlhOAHuAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNUI4NzkyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNUI4N0EyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI1Qjg3NzI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI1Qjg3ODI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAA4Ae4AAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aNeRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYSpFgAAOw==" id="cellDummy"><!--此元素用于保持宽高比撑开格子容器-->
          <!--div class="mask"></div-->
          <div class="close" url="http://huaweicloud.com/"></div>
        </div>
        <!--<div class="close"></div>-->
        <div class="backface">
          <!--div class="mask"></div-->
          <div class="text">
            <span class="title">华为云-有技术，有未来，值得信赖</span>
            <span class="url"></span>
          </div>
        </div>
      </a>
      <a class="contain" href="https://github.com/">
        <div class="front">
          <img class="thumbnail" src="chrome://thumb/https://github.com/">
          <img src="data:image/gif;base64,R0lGODlhOAHuAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNUI4NzkyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNUI4N0EyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI1Qjg3NzI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI1Qjg3ODI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAA4Ae4AAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aNeRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYSpFgAAOw==" id="cellDummy"><!--此元素用于保持宽高比撑开格子容器-->
          <!--div class="mask"></div-->
          <div class="close" url="https://github.com/"></div>
        </div>
        <!--<div class="close"></div>-->
        <div class="backface">
          <!--div class="mask"></div-->
          <div class="text">
            <span class="title">GitHub</span>
            <span class="url"></span>
          </div>
        </div>
      </a>
      <a class="contain" href="https://umijs.org/">
        <div class="front">
          <img class="thumbnail" src="chrome://thumb/https://umijs.org/">
          <img src="data:image/gif;base64,R0lGODlhOAHuAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNUI4NzkyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNUI4N0EyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI1Qjg3NzI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI1Qjg3ODI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAA4Ae4AAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aNeRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYSpFgAAOw==" id="cellDummy"><!--此元素用于保持宽高比撑开格子容器-->
          <!--div class="mask"></div-->
          <div class="close" url="https://umijs.org/"></div>
        </div>
        <!--<div class="close"></div>-->
        <div class="backface">
          <!--div class="mask"></div-->
          <div class="text">
            <span class="title">UmiJS · 极快的类 Next.js 的 React 应用框架。</span>
            <span class="url"></span>
          </div>
        </div>
      </a>
      <a class="contain" href="http://oa.gosuncn.com/">
        <div class="front">
          <img class="thumbnail" src="chrome://thumb/http://oa.gosuncn.com/">
          <img src="data:image/gif;base64,R0lGODlhOAHuAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNUI4NzkyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNUI4N0EyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI1Qjg3NzI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI1Qjg3ODI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAA4Ae4AAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aNeRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYSpFgAAOw==" id="cellDummy"><!--此元素用于保持宽高比撑开格子容器-->
          <!--div class="mask"></div-->
          <div class="close" url="http://oa.gosuncn.com/"></div>
        </div>
        <!--<div class="close"></div>-->
        <div class="backface">
          <!--div class="mask"></div-->
          <div class="text">
            <span class="title">gxx</span>
            <span class="url"></span>
          </div>
        </div>
      </a>
      <a class="contain" href="http://www.taobao.com/">
        <div class="front">
          <img class="thumbnail" src="chrome://thumb/http://www.taobao.com/">
          <img src="data:image/gif;base64,R0lGODlhOAHuAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNUI4NzkyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNUI4N0EyOTQzMTFFMzhDRkJCNTJERjNFRUU5MjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MkI1Qjg3NzI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MkI1Qjg3ODI5NDMxMUUzOENGQkI1MkRGM0VFRTkyMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAA4Ae4AAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aNeRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYSpFgAAOw==" id="cellDummy"><!--此元素用于保持宽高比撑开格子容器-->
          <!--div class="mask"></div-->
          <div class="close" url="http://www.taobao.com/"></div>
        </div>
        <!--<div class="close"></div>-->
        <div class="backface">
          <!--div class="mask"></div-->
          <div class="text">
            <span class="title">淘宝网 - 淘！我喜欢</span>
            <span class="url"></span>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<div id="page-nav" class="page-container pageNew" style="transform: translate3d(0px, 100%, 0px);">
    <iframe id="favorite-tab-iframe" src="chrome://favorite-tab/"></iframe>
  </div>
</div>
      `}
      </PrismCode>
    </pre>

    <h2>JSON</h2>
    <pre>
      <PrismCode className="language-javascript">
        {`
  "author": "adrai",
  "name": "flowchart.js",
  "version": "1.11.0",
  "main": "./index",
  "private": false,
  "engines": {
    "node": ">=4.0.0"
  },
  "dependencies": {
    "raphael": "2.2.7"
  },
  "devDependencies": {
    "eslint": "^1.10.3",
    "eslint-config-defaults": "^8.0.2",
    "express": ">= 0.0.1",
    "jquery": "^2.2.0",
    "lodash": ">=0.2.1",
    "moment": "^2.11.1",
    "webpack": "^1.12.11",
    "webpack-dev-middleware": "^1.4.0",
    "webpack-hot-middleware": "^2.6.0"
  },
  "scripts": {
    "init": "git submodule init && git submodule update && git submodule status",
    "start": "node devserver.js",
    "lint": "eslint src",
    "build:unminified": "NODE_ENV=production webpack -d --config webpack.config.js",
    "build:minified": "NODE_ENV=production MINIFIED=1 webpack -d --config webpack.config.js",
    "build": "npm run build:unminified && npm run build:minified && cp ./release/flowchart.js ./site/flowchart-latest.js",
    "test": "npm run lint"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/adrai/flowchart.js.git"
  },
  "keywords": [
    "flowchart",
    "client",
    "script"
  ],
  "homepage": "http://flowchart.js.org/",
  "license": "MIT"
`}
      </PrismCode>
    </pre>

    <h2>Javascript</h2>
    <pre>
      <PrismCode className="language-javascript">
        {`
import PrismCode, { PrismCode as NamedPrismCode } from "./index";

describe('index', () => {
  it('should export components', () => {
    expect(PrismCode).toBeDefined();
    expect(NamedPrismCode).toBeDefined();
  });
});
            `}
      </PrismCode>
    </pre>

    <h2>CSS</h2>
    <pre>
      <PrismCode className="language-css">
        {`
html, body {
    font-family: Helvetica, sans-serif; }
  
  .wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto; }
  
  input {
    position: absolute; }
  
  input.grow {
    -webkit-animation: grow 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -moz-animation: grow 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation: grow 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  
  @-webkit-keyframes grow {
    0% {
      -webkit-transform: scale(1); }
    30% {
      -webkit-transform: scale(2.5); }
    100% {
      -webkit-transform: scale(1); } }
            `}
      </PrismCode>
    </pre>

  <h2>服务端加载</h2>
    <pre data-src="/test.cs">
      <PrismCode className="language-csharp">
        {``}
      </PrismCode>
    </pre>
    
  </>);
}