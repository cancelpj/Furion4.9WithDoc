﻿// MIT 许可证
//
// 版权 © 2020-present 百小僧, 百签科技（广东）有限公司
//
// 特此免费授予任何获得本软件副本和相关文档文件（下称“软件”）的人不受限制地处置该软件的权利，
// 包括不受限制地使用、复制、修改、合并、发布、分发、转授许可和/或出售该软件副本，
// 以及再授权被配发了本软件的人如上的权利，须在下列条件下：
//
// 上述版权声明和本许可声明应包含在该软件的所有副本或实质成分中。
//
// 本软件是“如此”提供的，没有任何形式的明示或暗示的保证，包括但不限于对适销性、特定用途的适用性和不侵权的保证。
// 在任何情况下，作者或版权持有人都不对任何索赔、损害或其他责任负责，无论这些追责来自合同、侵权或其它行为中，
// 还是产生于、源于或有关于本软件以及本软件的使用或其它处置。

namespace Furion.DatabaseAccessor;

/// <summary>
/// 实体执行部件
/// </summary>
public sealed partial class EntityExecutePart<TEntity>
    where TEntity : class, IPrivateEntity, new()
{
    /// <summary>
    /// 设置实体
    /// </summary>
    /// <param name="entity"></param>
    /// <returns></returns>
    public EntityExecutePart<TEntity> SetEntity(TEntity entity)
    {
        Entity = entity;
        return this;
    }

    /// <summary>
    /// 设置数据库执行作用域
    /// </summary>
    /// <param name="serviceProvider"></param>
    /// <returns></returns>
    public EntityExecutePart<TEntity> SetContextScoped(IServiceProvider serviceProvider)
    {
        if (serviceProvider != null) ContextScoped = serviceProvider;
        return this;
    }

    /// <summary>
    /// 设置数据库上下文定位器
    /// </summary>
    /// <typeparam name="TDbContextLocator"></typeparam>
    /// <returns></returns>
    public EntityExecutePart<TEntity> Change<TDbContextLocator>()
        where TDbContextLocator : class, IDbContextLocator
    {
        return Change(typeof(TDbContextLocator));
    }

    /// <summary>
    /// 设置数据库上下文定位器
    /// </summary>
    /// <returns></returns>
    public EntityExecutePart<TEntity> Change(Type dbContextLocator)
    {
        if (dbContextLocator != null) DbContextLocator = dbContextLocator;
        return this;
    }
}