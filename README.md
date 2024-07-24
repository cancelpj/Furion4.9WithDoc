Handbook删除前最后一次提交：
https://github.com/cancelpj/Furion4.9WithDoc/tree/c8c5bb066233b415a144b03b531ccd5d01cc1304

handbook 采用`docusaurus`，如不能运行成功，请先更新`docusaurus`。



[![](./assets/499.jpeg)](http://furion.net/docs/subscribe)

[中](https://gitee.com/dotnetchina/Furion) | **En**

# Furion

An application framework that you can integrate into any .NET/C# application.

## Installation

```powershell
dotnet add package Furion
```

## Examples

We have several examples [on the website](http://furion.net). Here is the first one to get you started:

```cs
Serve.Run();

[DynamicApiController]
public class HelloService
{
    public string Say() => "Hello, Furion";
}
```

Open browser access `http://localhost:5000`.

## Documentation

You can find the [Furion](https://gitee.com/dotnetchina/Furion) documentation [on the website](http://furion.net).

## Contributing

The main purpose of this repository is to continue evolving [Furion](https://gitee.com/dotnetchina/Furion) core, making it faster and easier to use. Development of [Furion](https://gitee.com/dotnetchina/Furion) happens in the open on [Gitee](https://gitee.com/dotnetchina/Furion), and we are grateful to the community for contributing bugfixes and improvements.

Read [contribution documents](http://furion.net/docs/contribute) to learn how you can take part in improving [Furion](https://gitee.com/dotnetchina/Furion).

## License

[Furion](https://gitee.com/dotnetchina/Furion) uses the [MIT](https://gitee.com/dotnetchina/Furion/blob/v4/LICENSE) open source license.

## Sponsor

If Furion has been helpful to you and you would like to see Furion continue to grow, please consider [sponsoring](http://furion.net/docs/donate) us.

[![](./assets/crmeb-spec.jpg)](http://github.crmeb.net/u/furion)
